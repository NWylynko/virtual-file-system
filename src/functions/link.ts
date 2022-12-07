import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupLink = (fileSystem: FileSystem, options: FsOptions) => {
  const link = async () => {
    return;
  };

  return link;
};

export type link = ReturnType<typeof setupLink>;
