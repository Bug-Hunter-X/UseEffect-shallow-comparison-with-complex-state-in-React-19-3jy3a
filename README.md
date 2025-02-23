# React 19 useEffect Shallow Comparison Bug

This repository demonstrates a subtle bug related to shallow comparisons within the `useEffect` hook in React 19 when dealing with complex state objects.  The bug manifests as an infinite loop due to incorrect comparison logic.

## Bug Description
The original code attempts to compare the previous state (`prevCount`) with the current state (`count`). However, it performs a direct object comparison, which can lead to incorrect results and unexpected behavior when the object structure is complex. This often causes infinite renders, particularly when updating nested properties or parts of the object.

## Solution
The solution demonstrates the proper way to handle state comparisons within `useEffect`.  Instead of relying on direct object comparison, use a proper deep comparison function (or use JSON.stringify to compare string representation) to ensure the comparison works correctly, even when complex objects change.