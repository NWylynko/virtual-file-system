import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupReaddir = (fileSystem: FileSystem, options: FsOptions) => {
  const readdir = async () => {
    return;
  };

  return readdir;
};

export type readdir = ReturnType<typeof setupReaddir>;
