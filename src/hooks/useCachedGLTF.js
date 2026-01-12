import { useGLTF } from '@react-three/drei';

/**
 * Custom hook that wraps useGLTF
 * Now delegates to standard useGLTF as Service Worker handles caching
 *
 * @param {string} path - Path to the GLTF file
 * @returns {Object} - The loaded GLTF object
 */
export function useCachedGLTF(path) {
  return useGLTF(path);
}

/**
 * Preload function for useCachedGLTF
 * @param {string} path - Path to preload
 */
useCachedGLTF.preload = path => {
  useGLTF.preload(path);
};

export default useCachedGLTF;
