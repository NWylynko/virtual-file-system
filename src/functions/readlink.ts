import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupReadlink = (fileSystem: FileSystem, options: FsOptions) => {
  const readlink = async () => {
    return;
  };

  return readlink;
};

export type readlink = ReturnType<typeof setupReadlink>;
