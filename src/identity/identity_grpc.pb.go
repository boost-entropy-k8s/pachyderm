// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.11.4
// source: identity/identity.proto

package identity

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	API_SetIdentityServerConfig_FullMethodName = "/identity_v2.API/SetIdentityServerConfig"
	API_GetIdentityServerConfig_FullMethodName = "/identity_v2.API/GetIdentityServerConfig"
	API_CreateIDPConnector_FullMethodName      = "/identity_v2.API/CreateIDPConnector"
	API_UpdateIDPConnector_FullMethodName      = "/identity_v2.API/UpdateIDPConnector"
	API_ListIDPConnectors_FullMethodName       = "/identity_v2.API/ListIDPConnectors"
	API_GetIDPConnector_FullMethodName         = "/identity_v2.API/GetIDPConnector"
	API_DeleteIDPConnector_FullMethodName      = "/identity_v2.API/DeleteIDPConnector"
	API_CreateOIDCClient_FullMethodName        = "/identity_v2.API/CreateOIDCClient"
	API_UpdateOIDCClient_FullMethodName        = "/identity_v2.API/UpdateOIDCClient"
	API_GetOIDCClient_FullMethodName           = "/identity_v2.API/GetOIDCClient"
	API_ListOIDCClients_FullMethodName         = "/identity_v2.API/ListOIDCClients"
	API_DeleteOIDCClient_FullMethodName        = "/identity_v2.API/DeleteOIDCClient"
	API_DeleteAll_FullMethodName               = "/identity_v2.API/DeleteAll"
)

// APIClient is the client API for API service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type APIClient interface {
	SetIdentityServerConfig(ctx context.Context, in *SetIdentityServerConfigRequest, opts ...grpc.CallOption) (*SetIdentityServerConfigResponse, error)
	GetIdentityServerConfig(ctx context.Context, in *GetIdentityServerConfigRequest, opts ...grpc.CallOption) (*GetIdentityServerConfigResponse, error)
	CreateIDPConnector(ctx context.Context, in *CreateIDPConnectorRequest, opts ...grpc.CallOption) (*CreateIDPConnectorResponse, error)
	UpdateIDPConnector(ctx context.Context, in *UpdateIDPConnectorRequest, opts ...grpc.CallOption) (*UpdateIDPConnectorResponse, error)
	ListIDPConnectors(ctx context.Context, in *ListIDPConnectorsRequest, opts ...grpc.CallOption) (*ListIDPConnectorsResponse, error)
	GetIDPConnector(ctx context.Context, in *GetIDPConnectorRequest, opts ...grpc.CallOption) (*GetIDPConnectorResponse, error)
	DeleteIDPConnector(ctx context.Context, in *DeleteIDPConnectorRequest, opts ...grpc.CallOption) (*DeleteIDPConnectorResponse, error)
	CreateOIDCClient(ctx context.Context, in *CreateOIDCClientRequest, opts ...grpc.CallOption) (*CreateOIDCClientResponse, error)
	UpdateOIDCClient(ctx context.Context, in *UpdateOIDCClientRequest, opts ...grpc.CallOption) (*UpdateOIDCClientResponse, error)
	GetOIDCClient(ctx context.Context, in *GetOIDCClientRequest, opts ...grpc.CallOption) (*GetOIDCClientResponse, error)
	ListOIDCClients(ctx context.Context, in *ListOIDCClientsRequest, opts ...grpc.CallOption) (*ListOIDCClientsResponse, error)
	DeleteOIDCClient(ctx context.Context, in *DeleteOIDCClientRequest, opts ...grpc.CallOption) (*DeleteOIDCClientResponse, error)
	DeleteAll(ctx context.Context, in *DeleteAllRequest, opts ...grpc.CallOption) (*DeleteAllResponse, error)
}

type aPIClient struct {
	cc grpc.ClientConnInterface
}

func NewAPIClient(cc grpc.ClientConnInterface) APIClient {
	return &aPIClient{cc}
}

func (c *aPIClient) SetIdentityServerConfig(ctx context.Context, in *SetIdentityServerConfigRequest, opts ...grpc.CallOption) (*SetIdentityServerConfigResponse, error) {
	out := new(SetIdentityServerConfigResponse)
	err := c.cc.Invoke(ctx, API_SetIdentityServerConfig_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aPIClient) GetIdentityServerConfig(ctx context.Context, in *GetIdentityServerConfigRequest, opts ...grpc.CallOption) (*GetIdentityServerConfigResponse, error) {
	out := new(GetIdentityServerConfigResponse)
	err := c.cc.Invoke(ctx, API_GetIdentityServerConfig_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aPIClient) CreateIDPConnector(ctx context.Context, in *CreateIDPConnectorRequest, opts ...grpc.CallOption) (*CreateIDPConnectorResponse, error) {
	out := new(CreateIDPConnectorResponse)
	err := c.cc.Invoke(ctx, API_CreateIDPConnector_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aPIClient) UpdateIDPConnector(ctx context.Context, in *UpdateIDPConnectorRequest, opts ...grpc.CallOption) (*UpdateIDPConnectorResponse, error) {
	out := new(UpdateIDPConnectorResponse)
	err := c.cc.Invoke(ctx, API_UpdateIDPConnector_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aPIClient) ListIDPConnectors(ctx context.Context, in *ListIDPConnectorsRequest, opts ...grpc.CallOption) (*ListIDPConnectorsResponse, error) {
	out := new(ListIDPConnectorsResponse)
	err := c.cc.Invoke(ctx, API_ListIDPConnectors_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aPIClient) GetIDPConnector(ctx context.Context, in *GetIDPConnectorRequest, opts ...grpc.CallOption) (*GetIDPConnectorResponse, error) {
	out := new(GetIDPConnectorResponse)
	err := c.cc.Invoke(ctx, API_GetIDPConnector_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aPIClient) DeleteIDPConnector(ctx context.Context, in *DeleteIDPConnectorRequest, opts ...grpc.CallOption) (*DeleteIDPConnectorResponse, error) {
	out := new(DeleteIDPConnectorResponse)
	err := c.cc.Invoke(ctx, API_DeleteIDPConnector_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aPIClient) CreateOIDCClient(ctx context.Context, in *CreateOIDCClientRequest, opts ...grpc.CallOption) (*CreateOIDCClientResponse, error) {
	out := new(CreateOIDCClientResponse)
	err := c.cc.Invoke(ctx, API_CreateOIDCClient_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aPIClient) UpdateOIDCClient(ctx context.Context, in *UpdateOIDCClientRequest, opts ...grpc.CallOption) (*UpdateOIDCClientResponse, error) {
	out := new(UpdateOIDCClientResponse)
	err := c.cc.Invoke(ctx, API_UpdateOIDCClient_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aPIClient) GetOIDCClient(ctx context.Context, in *GetOIDCClientRequest, opts ...grpc.CallOption) (*GetOIDCClientResponse, error) {
	out := new(GetOIDCClientResponse)
	err := c.cc.Invoke(ctx, API_GetOIDCClient_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aPIClient) ListOIDCClients(ctx context.Context, in *ListOIDCClientsRequest, opts ...grpc.CallOption) (*ListOIDCClientsResponse, error) {
	out := new(ListOIDCClientsResponse)
	err := c.cc.Invoke(ctx, API_ListOIDCClients_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aPIClient) DeleteOIDCClient(ctx context.Context, in *DeleteOIDCClientRequest, opts ...grpc.CallOption) (*DeleteOIDCClientResponse, error) {
	out := new(DeleteOIDCClientResponse)
	err := c.cc.Invoke(ctx, API_DeleteOIDCClient_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aPIClient) DeleteAll(ctx context.Context, in *DeleteAllRequest, opts ...grpc.CallOption) (*DeleteAllResponse, error) {
	out := new(DeleteAllResponse)
	err := c.cc.Invoke(ctx, API_DeleteAll_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// APIServer is the server API for API service.
// All implementations must embed UnimplementedAPIServer
// for forward compatibility
type APIServer interface {
	SetIdentityServerConfig(context.Context, *SetIdentityServerConfigRequest) (*SetIdentityServerConfigResponse, error)
	GetIdentityServerConfig(context.Context, *GetIdentityServerConfigRequest) (*GetIdentityServerConfigResponse, error)
	CreateIDPConnector(context.Context, *CreateIDPConnectorRequest) (*CreateIDPConnectorResponse, error)
	UpdateIDPConnector(context.Context, *UpdateIDPConnectorRequest) (*UpdateIDPConnectorResponse, error)
	ListIDPConnectors(context.Context, *ListIDPConnectorsRequest) (*ListIDPConnectorsResponse, error)
	GetIDPConnector(context.Context, *GetIDPConnectorRequest) (*GetIDPConnectorResponse, error)
	DeleteIDPConnector(context.Context, *DeleteIDPConnectorRequest) (*DeleteIDPConnectorResponse, error)
	CreateOIDCClient(context.Context, *CreateOIDCClientRequest) (*CreateOIDCClientResponse, error)
	UpdateOIDCClient(context.Context, *UpdateOIDCClientRequest) (*UpdateOIDCClientResponse, error)
	GetOIDCClient(context.Context, *GetOIDCClientRequest) (*GetOIDCClientResponse, error)
	ListOIDCClients(context.Context, *ListOIDCClientsRequest) (*ListOIDCClientsResponse, error)
	DeleteOIDCClient(context.Context, *DeleteOIDCClientRequest) (*DeleteOIDCClientResponse, error)
	DeleteAll(context.Context, *DeleteAllRequest) (*DeleteAllResponse, error)
	mustEmbedUnimplementedAPIServer()
}

// UnimplementedAPIServer must be embedded to have forward compatible implementations.
type UnimplementedAPIServer struct {
}

func (UnimplementedAPIServer) SetIdentityServerConfig(context.Context, *SetIdentityServerConfigRequest) (*SetIdentityServerConfigResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetIdentityServerConfig not implemented")
}
func (UnimplementedAPIServer) GetIdentityServerConfig(context.Context, *GetIdentityServerConfigRequest) (*GetIdentityServerConfigResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetIdentityServerConfig not implemented")
}
func (UnimplementedAPIServer) CreateIDPConnector(context.Context, *CreateIDPConnectorRequest) (*CreateIDPConnectorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateIDPConnector not implemented")
}
func (UnimplementedAPIServer) UpdateIDPConnector(context.Context, *UpdateIDPConnectorRequest) (*UpdateIDPConnectorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateIDPConnector not implemented")
}
func (UnimplementedAPIServer) ListIDPConnectors(context.Context, *ListIDPConnectorsRequest) (*ListIDPConnectorsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListIDPConnectors not implemented")
}
func (UnimplementedAPIServer) GetIDPConnector(context.Context, *GetIDPConnectorRequest) (*GetIDPConnectorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetIDPConnector not implemented")
}
func (UnimplementedAPIServer) DeleteIDPConnector(context.Context, *DeleteIDPConnectorRequest) (*DeleteIDPConnectorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteIDPConnector not implemented")
}
func (UnimplementedAPIServer) CreateOIDCClient(context.Context, *CreateOIDCClientRequest) (*CreateOIDCClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateOIDCClient not implemented")
}
func (UnimplementedAPIServer) UpdateOIDCClient(context.Context, *UpdateOIDCClientRequest) (*UpdateOIDCClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateOIDCClient not implemented")
}
func (UnimplementedAPIServer) GetOIDCClient(context.Context, *GetOIDCClientRequest) (*GetOIDCClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOIDCClient not implemented")
}
func (UnimplementedAPIServer) ListOIDCClients(context.Context, *ListOIDCClientsRequest) (*ListOIDCClientsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListOIDCClients not implemented")
}
func (UnimplementedAPIServer) DeleteOIDCClient(context.Context, *DeleteOIDCClientRequest) (*DeleteOIDCClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteOIDCClient not implemented")
}
func (UnimplementedAPIServer) DeleteAll(context.Context, *DeleteAllRequest) (*DeleteAllResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteAll not implemented")
}
func (UnimplementedAPIServer) mustEmbedUnimplementedAPIServer() {}

// UnsafeAPIServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to APIServer will
// result in compilation errors.
type UnsafeAPIServer interface {
	mustEmbedUnimplementedAPIServer()
}

func RegisterAPIServer(s grpc.ServiceRegistrar, srv APIServer) {
	s.RegisterService(&API_ServiceDesc, srv)
}

func _API_SetIdentityServerConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetIdentityServerConfigRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).SetIdentityServerConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_SetIdentityServerConfig_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).SetIdentityServerConfig(ctx, req.(*SetIdentityServerConfigRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _API_GetIdentityServerConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetIdentityServerConfigRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).GetIdentityServerConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_GetIdentityServerConfig_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).GetIdentityServerConfig(ctx, req.(*GetIdentityServerConfigRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _API_CreateIDPConnector_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateIDPConnectorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).CreateIDPConnector(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_CreateIDPConnector_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).CreateIDPConnector(ctx, req.(*CreateIDPConnectorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _API_UpdateIDPConnector_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateIDPConnectorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).UpdateIDPConnector(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_UpdateIDPConnector_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).UpdateIDPConnector(ctx, req.(*UpdateIDPConnectorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _API_ListIDPConnectors_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListIDPConnectorsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).ListIDPConnectors(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_ListIDPConnectors_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).ListIDPConnectors(ctx, req.(*ListIDPConnectorsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _API_GetIDPConnector_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetIDPConnectorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).GetIDPConnector(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_GetIDPConnector_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).GetIDPConnector(ctx, req.(*GetIDPConnectorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _API_DeleteIDPConnector_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteIDPConnectorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).DeleteIDPConnector(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_DeleteIDPConnector_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).DeleteIDPConnector(ctx, req.(*DeleteIDPConnectorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _API_CreateOIDCClient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateOIDCClientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).CreateOIDCClient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_CreateOIDCClient_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).CreateOIDCClient(ctx, req.(*CreateOIDCClientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _API_UpdateOIDCClient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateOIDCClientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).UpdateOIDCClient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_UpdateOIDCClient_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).UpdateOIDCClient(ctx, req.(*UpdateOIDCClientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _API_GetOIDCClient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOIDCClientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).GetOIDCClient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_GetOIDCClient_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).GetOIDCClient(ctx, req.(*GetOIDCClientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _API_ListOIDCClients_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListOIDCClientsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).ListOIDCClients(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_ListOIDCClients_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).ListOIDCClients(ctx, req.(*ListOIDCClientsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _API_DeleteOIDCClient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteOIDCClientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).DeleteOIDCClient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_DeleteOIDCClient_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).DeleteOIDCClient(ctx, req.(*DeleteOIDCClientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _API_DeleteAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteAllRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(APIServer).DeleteAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: API_DeleteAll_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(APIServer).DeleteAll(ctx, req.(*DeleteAllRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// API_ServiceDesc is the grpc.ServiceDesc for API service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var API_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "identity_v2.API",
	HandlerType: (*APIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SetIdentityServerConfig",
			Handler:    _API_SetIdentityServerConfig_Handler,
		},
		{
			MethodName: "GetIdentityServerConfig",
			Handler:    _API_GetIdentityServerConfig_Handler,
		},
		{
			MethodName: "CreateIDPConnector",
			Handler:    _API_CreateIDPConnector_Handler,
		},
		{
			MethodName: "UpdateIDPConnector",
			Handler:    _API_UpdateIDPConnector_Handler,
		},
		{
			MethodName: "ListIDPConnectors",
			Handler:    _API_ListIDPConnectors_Handler,
		},
		{
			MethodName: "GetIDPConnector",
			Handler:    _API_GetIDPConnector_Handler,
		},
		{
			MethodName: "DeleteIDPConnector",
			Handler:    _API_DeleteIDPConnector_Handler,
		},
		{
			MethodName: "CreateOIDCClient",
			Handler:    _API_CreateOIDCClient_Handler,
		},
		{
			MethodName: "UpdateOIDCClient",
			Handler:    _API_UpdateOIDCClient_Handler,
		},
		{
			MethodName: "GetOIDCClient",
			Handler:    _API_GetOIDCClient_Handler,
		},
		{
			MethodName: "ListOIDCClients",
			Handler:    _API_ListOIDCClients_Handler,
		},
		{
			MethodName: "DeleteOIDCClient",
			Handler:    _API_DeleteOIDCClient_Handler,
		},
		{
			MethodName: "DeleteAll",
			Handler:    _API_DeleteAll_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "identity/identity.proto",
}
