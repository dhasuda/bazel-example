package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:defs.bzl", "ts_devserver", "ts_library")

ts_library(
    name = "server",
    srcs = glob(["*.ts"]),
    deps = [
        "@npm//@types",
        "@npm//koa",
    ],
)
