import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupLutimes = (fileSystem: FileSystem, options: FsOptions) => {
  const lutimes = async () => {
    return;
  };

  return lutimes;
};

export type lutimes = ReturnType<typeof setupLutimes>;
