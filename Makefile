##             HeadlessAPIs microservice Makefile
##
##  Simple Makefile containing implementation of targets for generating protobuf file
##
##  To generate swagger, angular models and go messages&grpc use this command:
##    $ make gen
SHELL=/bin/bash

PROTO_INCLUDES=-Iproto -I3rdparty -I=. -I=$${GOPATH}/src -I=$${GOPATH}/src/github.com/gogo/protobuf/protobuf
PROTO_GOGOSLICK_ARGS=Mgoogle/protobuf/any.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/duration.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/struct.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/wrappers.proto=github.com/gogo/protobuf/types,plugins=grpc,paths=source_relative
PROTO_GRPC_GATEWAY_ARGS=logtostderr=true,allow_patch_feature=false,paths=source_relative
PROTO_SWAGGER_ARGS=logtostderr=true,json_names_for_fields=true
##
##  \e[1mTargets\e[0m
##   \e[34mhelp\e[0m
##       Shows this help
help:
	@echo -e "$$(sed -n 's/^##//p' Makefile)"

##   \e[34mgen\e[0m
##       Shortcut for generate
gen: generate

##   \e[34mgenerate\e[0m
##       Generates swagger, Golang and Angular models
generate: generate/go generate/ng

##   \e[34mgenerate/swagger\e[0m
##       Generates swagger from proto file
generate/swagger:
	protoc $(PROTO_INCLUDES) \
	       proto/v1/common.proto \
	       --swagger_out=$(PROTO_SWAGGER_ARGS):openapi
	protoc $(PROTO_INCLUDES) \
	       proto/v1/admin_api.proto \
	       --swagger_out=$(PROTO_SWAGGER_ARGS):openapi
	protoc $(PROTO_INCLUDES) \
	       proto/v1/client_api.proto \
	       --swagger_out=$(PROTO_SWAGGER_ARGS):openapi

##   \e[34mgenerate/go\e[0m
##       Generates go grpc files and messages from proto file
generate/go:
	protoc $(PROTO_INCLUDES) \
	       proto/v1/common.proto \
	       --gogoslick_out=$(PROTO_GOGOSLICK_ARGS):go-sdk/common
	protoc $(PROTO_INCLUDES) \
	      proto/v1/admin_api.proto \
	       --gogoslick_out=$(PROTO_GOGOSLICK_ARGS):go-sdk/admin \
	       --grpc-gateway_out=$(PROTO_GRPC_GATEWAY_ARGS):go-sdk/admin
	protoc $(PROTO_INCLUDES) \
	       proto/v1/client_api.proto \
	       --gogoslick_out=$(PROTO_GOGOSLICK_ARGS):go-sdk/client \
	       --grpc-gateway_out=$(PROTO_GRPC_GATEWAY_ARGS):go-sdk/client

##   \e[34mgenerate/ng\e[0m
##       Generates Angular models from proto file
generate/ng: generate/swagger
	npm run gen-client

##   \e[34mserve/openapi\e[0m
##       Serves the swagger API as mocked server
serve/openapi:
	docker run --rm -p 80:8080 \
	                -e SWAGGER_JSON=/openapi/v1/admin_api.swagger.json \
	                -v $(CURDIR)/openapi:/openapi swaggerapi/swagger-ui
