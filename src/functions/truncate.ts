import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupTruncate = (fileSystem: FileSystem, options: FsOptions) => {
  const truncate = async () => {
    return;
  };

  return truncate;
};

export type truncate = ReturnType<typeof setupTruncate>;
