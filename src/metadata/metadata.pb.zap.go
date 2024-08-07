// Code generated by protoc-gen-zap (etc/proto/protoc-gen-zap). DO NOT EDIT.
//
// source: metadata/metadata.proto

package metadata

import (
	fmt "fmt"
	zapcore "go.uber.org/zap/zapcore"
)

func (x *ClusterPicker) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	return nil
}

func (x *Edit) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("project", x.GetProject())
	enc.AddObject("commit", x.GetCommit())
	enc.AddObject("branch", x.GetBranch())
	enc.AddObject("repo", x.GetRepo())
	if obj, ok := interface{}(x.GetCluster()).(zapcore.ObjectMarshaler); ok {
		enc.AddObject("cluster", obj)
	} else {
		enc.AddReflected("cluster", x.GetCluster())
	}
	enc.AddObject("pipeline", x.GetPipeline())
	if obj, ok := interface{}(x.GetReplace()).(zapcore.ObjectMarshaler); ok {
		enc.AddObject("replace", obj)
	} else {
		enc.AddReflected("replace", x.GetReplace())
	}
	if obj, ok := interface{}(x.GetAddKey()).(zapcore.ObjectMarshaler); ok {
		enc.AddObject("add_key", obj)
	} else {
		enc.AddReflected("add_key", x.GetAddKey())
	}
	if obj, ok := interface{}(x.GetEditKey()).(zapcore.ObjectMarshaler); ok {
		enc.AddObject("edit_key", obj)
	} else {
		enc.AddReflected("edit_key", x.GetEditKey())
	}
	if obj, ok := interface{}(x.GetDeleteKey()).(zapcore.ObjectMarshaler); ok {
		enc.AddObject("delete_key", obj)
	} else {
		enc.AddReflected("delete_key", x.GetDeleteKey())
	}
	return nil
}

func (x *Edit_Replace) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("replacement", zapcore.ObjectMarshalerFunc(func(enc zapcore.ObjectEncoder) error {
		for k, v := range x.Replacement {
			enc.AddString(fmt.Sprintf("%v", k), v)
		}
		return nil
	}))
	return nil
}

func (x *Edit_AddKey) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("key", x.Key)
	enc.AddString("value", x.Value)
	return nil
}

func (x *Edit_EditKey) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("key", x.Key)
	enc.AddString("value", x.Value)
	return nil
}

func (x *Edit_DeleteKey) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("key", x.Key)
	return nil
}

func (x *EditMetadataRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	editsArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Edits {
			if obj, ok := interface{}(v).(zapcore.ObjectMarshaler); ok {
				enc.AppendObject(obj)
			} else {
				enc.AppendReflected(v)
			}
		}
		return nil
	}
	enc.AddArray("edits", zapcore.ArrayMarshalerFunc(editsArrMarshaller))
	return nil
}

func (x *EditMetadataResponse) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	return nil
}
