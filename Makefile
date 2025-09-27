.PHONY: run-api
run-api:
	bazel run //modules/api:api

.PHONY: build-api-image
build-api-image:
	bazel build --@io_bazel_rules_docker//transitions:enable=false //modules/api:api_go_image

.PHONY: build-web-image
build-web-image:
	docker build modules/web-server -t monarch-web-server

.PHONY: gazelle-update
gazelle-update:
	bazel run //:gazelle-update-repos

.PHONY: gazelle
gazelle:
	bazel run //:gazelle
