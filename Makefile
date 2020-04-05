TOPDIR=$(shell pwd)

grpc:
	protoc -Iproto -I3rdparty \
		proto/v1/admin_api.proto \
		--gogoslick_out=plugins=grpc,paths=source_relative:pkg/admin \
		--grpc-gateway_out=logtostderr=true,allow_patch_feature=false,paths=source_relative:pkg/admin \
		--swagger_out=logtostderr=true:openapi
	protoc -Iproto -I3rdparty \
    		proto/v1/user_api.proto \
    		--gogoslick_out=plugins=grpc,paths=source_relative:pkg/client \
    		--grpc-gateway_out=logtostderr=true,allow_patch_feature=false,paths=source_relative:pkg/client \
    		--swagger_out=logtostderr=true:openapi


openapi/serve:
	docker run --rm -p 80:8080 -e SWAGGER_JSON=/openapi/v1/admin_api.swagger.json -v $(TOPDIR)/openapi:/openapi swaggerapi/swagger-ui