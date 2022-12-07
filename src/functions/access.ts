import { constants } from "../constants";
import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

// Tests a user's permissions for the file or directory specified by path. The mode argument is an optional integer that specifies the accessibility checks to be performed. mode should be either the value fs.constants.F_OK or a mask consisting of the bitwise OR of any of fs.constants.R_OK, fs.constants.W_OK, and fs.constants.X_OK (e.g. fs.constants.W_OK | fs.constants.R_OK). Check File access constants for possible values of mode.

// If the accessibility check is successful, the promise is resolved with no value. If any of the accessibility checks fail, the promise is rejected with an <Error> object. The following example checks if the file /etc/passwd can be read and written by the current process.

export const setupAccess = (fileSystem: FileSystem, options: FsOptions) => {
  const access = async (
    path: string,
    mode:
      | constants["F_OK"]
      | constants["W_OK"]
      | constants["X_OK"] = constants.F_OK,
  ): Promise<undefined> => {
    return;
  };

  return access;
};

export type access = ReturnType<typeof setupAccess>;
