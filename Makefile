.PHONY:: build graph

build:
	@bazel build //...

graph:
	@bazel query --notool_deps --noimplicit_deps "deps(//:bundle)" --output graph
