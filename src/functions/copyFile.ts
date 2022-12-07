import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupCopyFile = (fileSystem: FileSystem, options: FsOptions) => {
  const copyFile = async () => {
    return;
  };

  return copyFile;
};

export type copyFile = ReturnType<typeof setupCopyFile>;
