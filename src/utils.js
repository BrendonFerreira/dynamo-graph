/* @flow */

export function invariant(condition: mixed, message: string) : void {
  if (!condition)
    throw new Error(message)
}
