// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: server/worker/datum/datum.proto

package datum

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	pps "github.com/pachyderm/pachyderm/v2/src/pps"
	common "github.com/pachyderm/pachyderm/v2/src/server/worker/common"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type State int32

const (
	State_PROCESSED State = 0
	State_FAILED    State = 1
	State_RECOVERED State = 2
)

var State_name = map[int32]string{
	0: "PROCESSED",
	1: "FAILED",
	2: "RECOVERED",
}

var State_value = map[string]int32{
	"PROCESSED": 0,
	"FAILED":    1,
	"RECOVERED": 2,
}

func (x State) String() string {
	return proto.EnumName(State_name, int32(x))
}

func (State) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_96ec7427544ac634, []int{0}
}

type Meta struct {
	JobID                string            `protobuf:"bytes,1,opt,name=job_id,json=jobId,proto3" json:"job_id,omitempty"`
	Inputs               []*common.Input   `protobuf:"bytes,2,rep,name=inputs,proto3" json:"inputs,omitempty"`
	Hash                 string            `protobuf:"bytes,3,opt,name=hash,proto3" json:"hash,omitempty"`
	State                State             `protobuf:"varint,4,opt,name=state,proto3,enum=datum.State" json:"state,omitempty"`
	Reason               string            `protobuf:"bytes,5,opt,name=reason,proto3" json:"reason,omitempty"`
	Stats                *pps.ProcessStats `protobuf:"bytes,6,opt,name=stats,proto3" json:"stats,omitempty"`
	Index                int64             `protobuf:"varint,7,opt,name=index,proto3" json:"index,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *Meta) Reset()         { *m = Meta{} }
func (m *Meta) String() string { return proto.CompactTextString(m) }
func (*Meta) ProtoMessage()    {}
func (*Meta) Descriptor() ([]byte, []int) {
	return fileDescriptor_96ec7427544ac634, []int{0}
}
func (m *Meta) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Meta) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Meta.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Meta) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Meta.Merge(m, src)
}
func (m *Meta) XXX_Size() int {
	return m.Size()
}
func (m *Meta) XXX_DiscardUnknown() {
	xxx_messageInfo_Meta.DiscardUnknown(m)
}

var xxx_messageInfo_Meta proto.InternalMessageInfo

func (m *Meta) GetJobID() string {
	if m != nil {
		return m.JobID
	}
	return ""
}

func (m *Meta) GetInputs() []*common.Input {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func (m *Meta) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

func (m *Meta) GetState() State {
	if m != nil {
		return m.State
	}
	return State_PROCESSED
}

func (m *Meta) GetReason() string {
	if m != nil {
		return m.Reason
	}
	return ""
}

func (m *Meta) GetStats() *pps.ProcessStats {
	if m != nil {
		return m.Stats
	}
	return nil
}

func (m *Meta) GetIndex() int64 {
	if m != nil {
		return m.Index
	}
	return 0
}

type Stats struct {
	ProcessStats         *pps.ProcessStats `protobuf:"bytes,1,opt,name=process_stats,json=processStats,proto3" json:"process_stats,omitempty"`
	Processed            int64             `protobuf:"varint,2,opt,name=processed,proto3" json:"processed,omitempty"`
	Skipped              int64             `protobuf:"varint,3,opt,name=skipped,proto3" json:"skipped,omitempty"`
	Failed               int64             `protobuf:"varint,4,opt,name=failed,proto3" json:"failed,omitempty"`
	Recovered            int64             `protobuf:"varint,5,opt,name=recovered,proto3" json:"recovered,omitempty"`
	FailedID             string            `protobuf:"bytes,6,opt,name=failed_id,json=failedId,proto3" json:"failed_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *Stats) Reset()         { *m = Stats{} }
func (m *Stats) String() string { return proto.CompactTextString(m) }
func (*Stats) ProtoMessage()    {}
func (*Stats) Descriptor() ([]byte, []int) {
	return fileDescriptor_96ec7427544ac634, []int{1}
}
func (m *Stats) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Stats) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Stats.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Stats) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Stats.Merge(m, src)
}
func (m *Stats) XXX_Size() int {
	return m.Size()
}
func (m *Stats) XXX_DiscardUnknown() {
	xxx_messageInfo_Stats.DiscardUnknown(m)
}

var xxx_messageInfo_Stats proto.InternalMessageInfo

func (m *Stats) GetProcessStats() *pps.ProcessStats {
	if m != nil {
		return m.ProcessStats
	}
	return nil
}

func (m *Stats) GetProcessed() int64 {
	if m != nil {
		return m.Processed
	}
	return 0
}

func (m *Stats) GetSkipped() int64 {
	if m != nil {
		return m.Skipped
	}
	return 0
}

func (m *Stats) GetFailed() int64 {
	if m != nil {
		return m.Failed
	}
	return 0
}

func (m *Stats) GetRecovered() int64 {
	if m != nil {
		return m.Recovered
	}
	return 0
}

func (m *Stats) GetFailedID() string {
	if m != nil {
		return m.FailedID
	}
	return ""
}

func init() {
	proto.RegisterEnum("datum.State", State_name, State_value)
	proto.RegisterType((*Meta)(nil), "datum.Meta")
	proto.RegisterType((*Stats)(nil), "datum.Stats")
}

func init() { proto.RegisterFile("server/worker/datum/datum.proto", fileDescriptor_96ec7427544ac634) }

var fileDescriptor_96ec7427544ac634 = []byte{
	// 446 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x92, 0xc1, 0x8b, 0xd3, 0x40,
	0x14, 0xc6, 0x9d, 0xa6, 0xc9, 0x6e, 0x66, 0x5b, 0xa9, 0xc3, 0x22, 0xc3, 0x22, 0x6d, 0x2c, 0x88,
	0xd1, 0x43, 0x83, 0x11, 0x04, 0x8f, 0xee, 0x26, 0x2b, 0x11, 0x65, 0x97, 0x29, 0x78, 0xf0, 0xb2,
	0x24, 0x99, 0xb1, 0xc9, 0xae, 0xcd, 0x0c, 0x33, 0x69, 0xd5, 0xff, 0xd0, 0xa3, 0x47, 0x4f, 0x45,
	0xf2, 0x97, 0xc8, 0xcc, 0x44, 0xb6, 0x82, 0x7b, 0x49, 0xde, 0xf7, 0xbd, 0xf7, 0x7e, 0xf0, 0xf1,
	0x06, 0xce, 0x14, 0x93, 0x5b, 0x26, 0xa3, 0xaf, 0x5c, 0xde, 0x30, 0x19, 0xd1, 0xbc, 0xdd, 0xac,
	0xed, 0x77, 0x21, 0x24, 0x6f, 0x39, 0x72, 0x8d, 0x38, 0x39, 0x5e, 0xf1, 0x15, 0x37, 0x4e, 0xa4,
	0x2b, 0xdb, 0x3c, 0x19, 0x0b, 0xa1, 0x22, 0x21, 0x54, 0x2f, 0x1f, 0xff, 0x0b, 0x2b, 0xf9, 0x7a,
	0xcd, 0x9b, 0xfe, 0x67, 0x47, 0xe6, 0x3b, 0x00, 0x87, 0x1f, 0x58, 0x9b, 0xa3, 0x00, 0x7a, 0xd7,
	0xbc, 0xb8, 0xaa, 0x29, 0x06, 0x01, 0x08, 0xfd, 0x53, 0xbf, 0xdb, 0xcd, 0xdc, 0x77, 0xbc, 0xc8,
	0x12, 0xe2, 0x5e, 0xf3, 0x22, 0xa3, 0xe8, 0x09, 0xf4, 0xea, 0x46, 0x6c, 0x5a, 0x85, 0x07, 0x81,
	0x13, 0x1e, 0xc5, 0xe3, 0x45, 0x4f, 0xca, 0xb4, 0x4b, 0xfa, 0x26, 0x42, 0x70, 0x58, 0xe5, 0xaa,
	0xc2, 0x8e, 0xc6, 0x10, 0x53, 0xa3, 0x39, 0x74, 0x55, 0x9b, 0xb7, 0x0c, 0x0f, 0x03, 0x10, 0xde,
	0x8f, 0x47, 0x0b, 0x9b, 0x68, 0xa9, 0x3d, 0x62, 0x5b, 0xe8, 0x21, 0xf4, 0x24, 0xcb, 0x15, 0x6f,
	0xb0, 0x6b, 0x36, 0x7b, 0x85, 0x9e, 0xda, 0x5d, 0x85, 0xbd, 0x00, 0x84, 0x47, 0xf1, 0x83, 0x85,
	0xce, 0x77, 0x29, 0x79, 0xc9, 0x94, 0xd2, 0x00, 0x65, 0x01, 0x0a, 0x1d, 0x43, 0xb7, 0x6e, 0x28,
	0xfb, 0x86, 0x0f, 0x02, 0x10, 0x3a, 0xc4, 0x8a, 0xf9, 0x2f, 0x00, 0x5d, 0x33, 0x86, 0x5e, 0xc1,
	0xb1, 0xb0, 0x6b, 0x57, 0x16, 0x08, 0xee, 0x02, 0x8e, 0xc4, 0x9e, 0x42, 0x8f, 0xa0, 0xdf, 0x6b,
	0x46, 0xf1, 0xc0, 0xb0, 0x6f, 0x0d, 0x84, 0xe1, 0x81, 0xba, 0xa9, 0x85, 0x60, 0xd4, 0x24, 0x76,
	0xc8, 0x5f, 0xa9, 0x03, 0x7d, 0xce, 0xeb, 0x2f, 0x8c, 0x9a, 0xd4, 0x0e, 0xe9, 0x95, 0xe6, 0x49,
	0x56, 0xf2, 0x2d, 0x93, 0x8c, 0x9a, 0xac, 0x0e, 0xb9, 0x35, 0xd0, 0x33, 0xe8, 0xdb, 0x39, 0x7d,
	0x0a, 0xcf, 0x9c, 0x62, 0xd4, 0xed, 0x66, 0x87, 0xe7, 0xc6, 0xcc, 0x12, 0x72, 0x68, 0xdb, 0x19,
	0x7d, 0xfe, 0xc2, 0x26, 0x63, 0x68, 0x0c, 0xfd, 0x4b, 0x72, 0x71, 0x96, 0x2e, 0x97, 0x69, 0x32,
	0xb9, 0x87, 0x20, 0xf4, 0xce, 0xdf, 0x64, 0xef, 0xd3, 0x64, 0x02, 0x74, 0x8b, 0xa4, 0x67, 0x17,
	0x1f, 0x53, 0x92, 0x26, 0x93, 0xc1, 0xe9, 0xdb, 0x1f, 0xdd, 0x14, 0xfc, 0xec, 0xa6, 0xe0, 0x77,
	0x37, 0x05, 0x9f, 0x5e, 0xaf, 0xea, 0xb6, 0xda, 0x14, 0xfa, 0x8e, 0x91, 0xc8, 0xcb, 0xea, 0x3b,
	0x65, 0x72, 0xbf, 0xda, 0xc6, 0x91, 0x92, 0x65, 0xf4, 0x9f, 0x27, 0x59, 0x78, 0xe6, 0xf9, 0xbc,
	0xfc, 0x13, 0x00, 0x00, 0xff, 0xff, 0x61, 0x83, 0xbb, 0x0b, 0xb0, 0x02, 0x00, 0x00,
}

func (m *Meta) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Meta) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Meta) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if m.Index != 0 {
		i = encodeVarintDatum(dAtA, i, uint64(m.Index))
		i--
		dAtA[i] = 0x38
	}
	if m.Stats != nil {
		{
			size, err := m.Stats.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintDatum(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x32
	}
	if len(m.Reason) > 0 {
		i -= len(m.Reason)
		copy(dAtA[i:], m.Reason)
		i = encodeVarintDatum(dAtA, i, uint64(len(m.Reason)))
		i--
		dAtA[i] = 0x2a
	}
	if m.State != 0 {
		i = encodeVarintDatum(dAtA, i, uint64(m.State))
		i--
		dAtA[i] = 0x20
	}
	if len(m.Hash) > 0 {
		i -= len(m.Hash)
		copy(dAtA[i:], m.Hash)
		i = encodeVarintDatum(dAtA, i, uint64(len(m.Hash)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Inputs) > 0 {
		for iNdEx := len(m.Inputs) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Inputs[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintDatum(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.JobID) > 0 {
		i -= len(m.JobID)
		copy(dAtA[i:], m.JobID)
		i = encodeVarintDatum(dAtA, i, uint64(len(m.JobID)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *Stats) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Stats) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Stats) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.FailedID) > 0 {
		i -= len(m.FailedID)
		copy(dAtA[i:], m.FailedID)
		i = encodeVarintDatum(dAtA, i, uint64(len(m.FailedID)))
		i--
		dAtA[i] = 0x32
	}
	if m.Recovered != 0 {
		i = encodeVarintDatum(dAtA, i, uint64(m.Recovered))
		i--
		dAtA[i] = 0x28
	}
	if m.Failed != 0 {
		i = encodeVarintDatum(dAtA, i, uint64(m.Failed))
		i--
		dAtA[i] = 0x20
	}
	if m.Skipped != 0 {
		i = encodeVarintDatum(dAtA, i, uint64(m.Skipped))
		i--
		dAtA[i] = 0x18
	}
	if m.Processed != 0 {
		i = encodeVarintDatum(dAtA, i, uint64(m.Processed))
		i--
		dAtA[i] = 0x10
	}
	if m.ProcessStats != nil {
		{
			size, err := m.ProcessStats.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintDatum(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintDatum(dAtA []byte, offset int, v uint64) int {
	offset -= sovDatum(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Meta) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.JobID)
	if l > 0 {
		n += 1 + l + sovDatum(uint64(l))
	}
	if len(m.Inputs) > 0 {
		for _, e := range m.Inputs {
			l = e.Size()
			n += 1 + l + sovDatum(uint64(l))
		}
	}
	l = len(m.Hash)
	if l > 0 {
		n += 1 + l + sovDatum(uint64(l))
	}
	if m.State != 0 {
		n += 1 + sovDatum(uint64(m.State))
	}
	l = len(m.Reason)
	if l > 0 {
		n += 1 + l + sovDatum(uint64(l))
	}
	if m.Stats != nil {
		l = m.Stats.Size()
		n += 1 + l + sovDatum(uint64(l))
	}
	if m.Index != 0 {
		n += 1 + sovDatum(uint64(m.Index))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *Stats) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.ProcessStats != nil {
		l = m.ProcessStats.Size()
		n += 1 + l + sovDatum(uint64(l))
	}
	if m.Processed != 0 {
		n += 1 + sovDatum(uint64(m.Processed))
	}
	if m.Skipped != 0 {
		n += 1 + sovDatum(uint64(m.Skipped))
	}
	if m.Failed != 0 {
		n += 1 + sovDatum(uint64(m.Failed))
	}
	if m.Recovered != 0 {
		n += 1 + sovDatum(uint64(m.Recovered))
	}
	l = len(m.FailedID)
	if l > 0 {
		n += 1 + l + sovDatum(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovDatum(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozDatum(x uint64) (n int) {
	return sovDatum(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Meta) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowDatum
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Meta: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Meta: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field JobID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthDatum
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDatum
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.JobID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Inputs", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthDatum
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthDatum
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Inputs = append(m.Inputs, &common.Input{})
			if err := m.Inputs[len(m.Inputs)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Hash", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthDatum
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDatum
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Hash = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field State", wireType)
			}
			m.State = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.State |= State(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Reason", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthDatum
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDatum
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Reason = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Stats", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthDatum
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthDatum
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Stats == nil {
				m.Stats = &pps.ProcessStats{}
			}
			if err := m.Stats.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			m.Index = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Index |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipDatum(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthDatum
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *Stats) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowDatum
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Stats: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Stats: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ProcessStats", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthDatum
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthDatum
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.ProcessStats == nil {
				m.ProcessStats = &pps.ProcessStats{}
			}
			if err := m.ProcessStats.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Processed", wireType)
			}
			m.Processed = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Processed |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Skipped", wireType)
			}
			m.Skipped = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Skipped |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Failed", wireType)
			}
			m.Failed = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Failed |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Recovered", wireType)
			}
			m.Recovered = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Recovered |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field FailedID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthDatum
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDatum
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.FailedID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipDatum(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthDatum
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipDatum(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowDatum
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowDatum
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthDatum
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupDatum
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthDatum
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthDatum        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowDatum          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupDatum = fmt.Errorf("proto: unexpected end of group")
)
