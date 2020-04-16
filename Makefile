TOPDIR=$(shell pwd)
INCLUDES=-Iproto -I3rdparty

gen: gen-swagger gen-go gen-ng

gen-swagger:
	protoc $(INCLUDES) \
		proto/v1/common.proto \
		--swagger_out=logtostderr=true:openapi
	protoc $(INCLUDES) \
		proto/v1/admin_api.proto \
		--swagger_out=logtostderr=true:openapi
	protoc $(INCLUDES) \
		proto/v1/client_api.proto \
		--swagger_out=logtostderr=true:openapi

gen-go:
	protoc $(INCLUDES) \
		proto/v1/common.proto \
		--gogoslick_out=plugins=grpc,paths=source_relative:go-sdk/common \
		--grpc-gateway_out=logtostderr=true,allow_patch_feature=false,paths=source_relative:go-sdk/common
	protoc $(INCLUDES) \
		proto/v1/admin_api.proto \
		--gogoslick_out=plugins=grpc,paths=source_relative:go-sdk/admin \
		--grpc-gateway_out=logtostderr=true,allow_patch_feature=false,paths=source_relative:go-sdk/admin
	protoc $(INCLUDES) \
		proto/v1/client_api.proto \
		--gogoslick_out=plugins=grpc,paths=source_relative:go-sdk/client \
		--grpc-gateway_out=logtostderr=true,allow_patch_feature=false,paths=source_relative:go-sdk/client

gen-ng:
	npm run gen-client

openapi/serve:
	docker run --rm -p 80:8080 -e SWAGGER_JSON=/openapi/v1/admin_api.swagger.json -v $(TOPDIR)/openapi:/openapi swaggerapi/swagger-ui