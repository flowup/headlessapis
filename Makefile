PROTO_INCLUDES=-Iproto -I3rdparty -I=. -I=$${GOPATH}/src -I=$${GOPATH}/src/github.com/gogo/protobuf/protobuf

PROTO_GOGOSLICK_ARGS=Mgoogle/protobuf/any.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/duration.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/struct.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/wrappers.proto=github.com/gogo/protobuf/types,plugins=grpc,paths=source_relative

PROTO_GRPC_GATEWAY_ARGS=logtostderr=true,allow_patch_feature=false,paths=source_relative

PROTO_SWAGGER_ARGS=logtostderr=true,json_names_for_fields=true

gen: gen-swagger gen-go gen-ng

gen-swagger:
	protoc $(PROTO_INCLUDES) \
	       proto/v1/common.proto \
	       --swagger_out=$(PROTO_SWAGGER_ARGS):openapi
	protoc $(PROTO_INCLUDES) \
	       proto/v1/admin_api.proto \
	       --swagger_out=$(PROTO_SWAGGER_ARGS):openapi
	protoc $(PROTO_INCLUDES) \
	       proto/v1/client_api.proto \
	       --swagger_out=$(PROTO_SWAGGER_ARGS):openapi

gen-go:
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

gen-ng:
	npm run gen-client

openapi/serve:
	docker run --rm -p 80:8080 \
	                -e SWAGGER_JSON=/openapi/v1/admin_api.swagger.json \
	                -v $(CURDIR)/openapi:/openapi swaggerapi/swagger-ui