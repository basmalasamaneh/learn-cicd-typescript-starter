import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authorization header is not an ApiKey", () => {
    expect(
      getAPIKey({
        authorization: "Bearer abc123",
      }),
    ).toBeNull();
  });

  test("returns the API key from a valid authorization header", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey abc123",
      }),
    ).toBe("wrong-key");
  });

  test("returns null when the ApiKey header has no key", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey",
      }),
    ).toBeNull();
  });
});
