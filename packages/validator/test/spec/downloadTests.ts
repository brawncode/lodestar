import {downloadGenericSpecTests} from "@lodestar/spec-test-util/downloadTests";
import {SPEC_TEST_LOCATION, SPEC_TEST_REPO_URL, SPEC_TEST_VERSION, TESTS_TO_DOWNLOAD} from "./params.js";

/* eslint-disable no-console */

downloadGenericSpecTests(
  {
    specVersion: SPEC_TEST_VERSION,
    outputDir: SPEC_TEST_LOCATION,
    specTestsRepoUrl: SPEC_TEST_REPO_URL,
    testsToDownload: TESTS_TO_DOWNLOAD,
  },
  console.log
).catch((e: Error) => {
  console.error(e);
  process.exit(1);
});
