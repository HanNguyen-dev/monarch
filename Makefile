.PHONY: run-api
run-api:
	bazelisk run //modules/api:api

.PHONY: build-api-image
build-api-image:
	bazelisk build --@io_bazel_rules_docker//transitions:enable=false //modules/api:api_go_image