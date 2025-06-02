import * as React from "react";

/**
 * A utility to compose multiple event handlers into a single event handler.
 * Run originalEventHandler first, then ourEventHandler unless prevented.
 */
function composeEventHandlers<E>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {},
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);

    if (
      checkForDefaultPrevented === false ||
      !(event as unknown as Event).defaultPrevented
    ) {
      return ourEventHandler?.(event);
    }
  };
}

/**
 * @see https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
 */

type PossibleRef<T> = React.Ref<T> | undefined;

/**
 * Set a given ref to a given value.
 * This utility takes care of different types of refs: callback refs and RefObject(s).
 */
// Updated setRef:
// 1. value type is T | null
// 2. Return type is void | (() => void)
// 3. Cast to React.MutableRefObject<T | null> for assignment to .current to fix TS2540
function setRef<T>(ref: PossibleRef<T>, value: T | null): void | (() => void) {
  if (typeof ref === "function") {
    return ref(value);
  }

  if (ref !== null && ref !== undefined) {
    // Cast to MutableRefObject to allow assignment.
    (ref as React.MutableRefObject<T | null>).current = value;
  }
  // Implicitly returns undefined if ref is not a function or if the function ref returns void.
}

/**
 * A utility to compose multiple refs together.
 * Accepts callback refs and RefObject(s).
 * Handles cleanup functions returned by callback refs.
 */
// Updated composeRefs:
// 1. Return type is React.RefCallback<T | null>
// 2. Parameter `node` type is T | null
// 3. Refactored logic for collecting and calling cleanup functions to address TS2349
function composeRefs<T>(...refs: PossibleRef<T>[]): React.RefCallback<T | null> {
  return (node: T | null) => {
    const individualCleanups: (() => void)[] = [];

    for (const ref of refs) {
      // Pass the node (which can be T or null) to setRef
      const result = setRef(ref, node);
      if (typeof result === "function") {
        individualCleanups.push(result);
      }
    }

    if (individualCleanups.length > 0) {
      return () => {
        for (const cleanupFn of individualCleanups) {
          cleanupFn(); // individualCleanups contains only functions, so this is safe.
        }
      };
    }
    // If no individual cleanups, the primary ref callback returns void by default,
    // which is compliant with React.RefCallback<T | null>.
  };
}

/**
 * A custom hook that composes multiple refs.
 * Accepts callback refs and RefObject(s).
 */
// Updated useComposedRefs:
// 1. Return type is React.RefCallback<T | null> to match composeRefs
function useComposedRefs<T>(...refs: PossibleRef<T>[]): React.RefCallback<T | null> {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(composeRefs(...refs), refs);
}

export { composeEventHandlers, composeRefs, useComposedRefs };
