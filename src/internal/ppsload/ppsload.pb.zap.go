// Code generated by protoc-gen-zap (etc/proto/protoc-gen-zap). DO NOT EDIT.
//
// source: internal/ppsload/ppsload.proto

package ppsload

import (
	zapcore "go.uber.org/zap/zapcore"
)

func (x *State) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("branch", x.Branch)
	enc.AddString("pfs_state_id", x.PfsStateId)
	return nil
}
