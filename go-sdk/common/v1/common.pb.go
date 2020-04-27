// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: v1/common.proto

package v1

import (
	encoding_binary "encoding/binary"
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
	reflect "reflect"
	strings "strings"
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

// Message representing a value of something in a particular currency
type Amount struct {
	Currency string  `protobuf:"bytes,1,opt,name=currency,proto3" json:"currency,omitempty"`
	Value    float64 `protobuf:"fixed64,2,opt,name=value,proto3" json:"value,omitempty"`
}

func (m *Amount) Reset()      { *m = Amount{} }
func (*Amount) ProtoMessage() {}
func (*Amount) Descriptor() ([]byte, []int) {
	return fileDescriptor_372283428b44e521, []int{0}
}
func (m *Amount) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Amount) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Amount.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Amount) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Amount.Merge(m, src)
}
func (m *Amount) XXX_Size() int {
	return m.Size()
}
func (m *Amount) XXX_DiscardUnknown() {
	xxx_messageInfo_Amount.DiscardUnknown(m)
}

var xxx_messageInfo_Amount proto.InternalMessageInfo

func (m *Amount) GetCurrency() string {
	if m != nil {
		return m.Currency
	}
	return ""
}

func (m *Amount) GetValue() float64 {
	if m != nil {
		return m.Value
	}
	return 0
}

// Message representing an expression to be used especially in filter operations
type Expression struct {
	// Operator used in expression
	Op string `protobuf:"bytes,1,opt,name=op,proto3" json:"op,omitempty"`
	// Right hand side of the expression - value
	Rhs string `protobuf:"bytes,2,opt,name=rhs,proto3" json:"rhs,omitempty"`
}

func (m *Expression) Reset()      { *m = Expression{} }
func (*Expression) ProtoMessage() {}
func (*Expression) Descriptor() ([]byte, []int) {
	return fileDescriptor_372283428b44e521, []int{1}
}
func (m *Expression) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Expression) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Expression.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Expression) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Expression.Merge(m, src)
}
func (m *Expression) XXX_Size() int {
	return m.Size()
}
func (m *Expression) XXX_DiscardUnknown() {
	xxx_messageInfo_Expression.DiscardUnknown(m)
}

var xxx_messageInfo_Expression proto.InternalMessageInfo

func (m *Expression) GetOp() string {
	if m != nil {
		return m.Op
	}
	return ""
}

func (m *Expression) GetRhs() string {
	if m != nil {
		return m.Rhs
	}
	return ""
}

// List of expressions
type ExpressionList struct {
	Items []*Expression `protobuf:"bytes,1,rep,name=items,proto3" json:"items,omitempty"`
}

func (m *ExpressionList) Reset()      { *m = ExpressionList{} }
func (*ExpressionList) ProtoMessage() {}
func (*ExpressionList) Descriptor() ([]byte, []int) {
	return fileDescriptor_372283428b44e521, []int{2}
}
func (m *ExpressionList) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ExpressionList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ExpressionList.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ExpressionList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExpressionList.Merge(m, src)
}
func (m *ExpressionList) XXX_Size() int {
	return m.Size()
}
func (m *ExpressionList) XXX_DiscardUnknown() {
	xxx_messageInfo_ExpressionList.DiscardUnknown(m)
}

var xxx_messageInfo_ExpressionList proto.InternalMessageInfo

func (m *ExpressionList) GetItems() []*Expression {
	if m != nil {
		return m.Items
	}
	return nil
}

func init() {
	proto.RegisterType((*Amount)(nil), "common.v1.Amount")
	proto.RegisterType((*Expression)(nil), "common.v1.Expression")
	proto.RegisterType((*ExpressionList)(nil), "common.v1.ExpressionList")
}

func init() { proto.RegisterFile("v1/common.proto", fileDescriptor_372283428b44e521) }

var fileDescriptor_372283428b44e521 = []byte{
	// 272 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x44, 0x90, 0x31, 0x4b, 0xc3, 0x40,
	0x18, 0x86, 0xef, 0x6b, 0x69, 0x31, 0x27, 0x54, 0x39, 0x14, 0x82, 0xc3, 0x47, 0xc8, 0x14, 0x10,
	0x73, 0x44, 0x37, 0xc1, 0x41, 0xc1, 0xcd, 0x29, 0xa3, 0x5b, 0x9a, 0x9e, 0x4d, 0x30, 0xc9, 0x1d,
	0xb9, 0x24, 0xea, 0xe6, 0x4f, 0xf0, 0x67, 0xf8, 0x53, 0x1c, 0x33, 0x76, 0x34, 0x97, 0xc5, 0xb1,
	0x3f, 0x41, 0xda, 0x86, 0x76, 0xfb, 0x1e, 0x78, 0xde, 0x8f, 0x97, 0x97, 0x9e, 0x34, 0x01, 0x8f,
	0x65, 0x9e, 0xcb, 0xc2, 0x57, 0xa5, 0xac, 0x24, 0xb3, 0x06, 0x6a, 0x02, 0xf7, 0x96, 0x4e, 0xef,
	0x73, 0x59, 0x17, 0x15, 0xbb, 0xa0, 0x47, 0x71, 0x5d, 0x96, 0xa2, 0x88, 0x3f, 0x6c, 0x70, 0xc0,
	0xb3, 0xc2, 0x3d, 0xb3, 0x33, 0x3a, 0x69, 0xa2, 0xac, 0x16, 0xf6, 0xc8, 0x01, 0x0f, 0xc2, 0x1d,
	0xb8, 0x3e, 0xa5, 0x8f, 0xef, 0xaa, 0x14, 0x5a, 0xa7, 0xb2, 0x60, 0x33, 0x3a, 0x92, 0x6a, 0x48,
	0x8e, 0xa4, 0x62, 0xa7, 0x74, 0x5c, 0x26, 0x7a, 0x9b, 0xb0, 0xc2, 0xcd, 0xe9, 0xde, 0xd1, 0xd9,
	0xc1, 0x7f, 0x4a, 0x75, 0xc5, 0x2e, 0xe9, 0x24, 0xad, 0x44, 0xae, 0x6d, 0x70, 0xc6, 0xde, 0xf1,
	0xf5, 0xb9, 0xbf, 0x2f, 0xe6, 0x1f, 0xcc, 0x70, 0xe7, 0x3c, 0x88, 0xb6, 0x43, 0xb2, 0xea, 0x90,
	0xac, 0x3b, 0x84, 0x4f, 0x83, 0xf0, 0x6d, 0x10, 0x7e, 0x0c, 0x42, 0x6b, 0x10, 0x7e, 0x0d, 0xc2,
	0x9f, 0x41, 0xb2, 0x36, 0x08, 0x5f, 0x3d, 0x92, 0xb6, 0x47, 0xb2, 0xea, 0x91, 0x3c, 0xf3, 0x65,
	0x5a, 0x25, 0xf5, 0x7c, 0xf3, 0x99, 0xbf, 0x64, 0xf2, 0xad, 0x56, 0x3c, 0x11, 0xd1, 0x22, 0x13,
	0x5a, 0x47, 0x2a, 0xd5, 0x7c, 0x29, 0xaf, 0xf4, 0xe2, 0x75, 0xd8, 0x87, 0x37, 0xc1, 0x7c, 0xba,
	0xdd, 0xe8, 0xe6, 0x3f, 0x00, 0x00, 0xff, 0xff, 0xc6, 0x4f, 0x6e, 0x13, 0x36, 0x01, 0x00, 0x00,
}

func (this *Amount) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*Amount)
	if !ok {
		that2, ok := that.(Amount)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if this.Currency != that1.Currency {
		return false
	}
	if this.Value != that1.Value {
		return false
	}
	return true
}
func (this *Expression) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*Expression)
	if !ok {
		that2, ok := that.(Expression)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if this.Op != that1.Op {
		return false
	}
	if this.Rhs != that1.Rhs {
		return false
	}
	return true
}
func (this *ExpressionList) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*ExpressionList)
	if !ok {
		that2, ok := that.(ExpressionList)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if len(this.Items) != len(that1.Items) {
		return false
	}
	for i := range this.Items {
		if !this.Items[i].Equal(that1.Items[i]) {
			return false
		}
	}
	return true
}
func (this *Amount) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 6)
	s = append(s, "&v1.Amount{")
	s = append(s, "Currency: "+fmt.Sprintf("%#v", this.Currency)+",\n")
	s = append(s, "Value: "+fmt.Sprintf("%#v", this.Value)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *Expression) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 6)
	s = append(s, "&v1.Expression{")
	s = append(s, "Op: "+fmt.Sprintf("%#v", this.Op)+",\n")
	s = append(s, "Rhs: "+fmt.Sprintf("%#v", this.Rhs)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *ExpressionList) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 5)
	s = append(s, "&v1.ExpressionList{")
	if this.Items != nil {
		s = append(s, "Items: "+fmt.Sprintf("%#v", this.Items)+",\n")
	}
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringCommon(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}
func (m *Amount) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Amount) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Amount) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Value != 0 {
		i -= 8
		encoding_binary.LittleEndian.PutUint64(dAtA[i:], uint64(math.Float64bits(float64(m.Value))))
		i--
		dAtA[i] = 0x11
	}
	if len(m.Currency) > 0 {
		i -= len(m.Currency)
		copy(dAtA[i:], m.Currency)
		i = encodeVarintCommon(dAtA, i, uint64(len(m.Currency)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *Expression) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Expression) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Expression) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Rhs) > 0 {
		i -= len(m.Rhs)
		copy(dAtA[i:], m.Rhs)
		i = encodeVarintCommon(dAtA, i, uint64(len(m.Rhs)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Op) > 0 {
		i -= len(m.Op)
		copy(dAtA[i:], m.Op)
		i = encodeVarintCommon(dAtA, i, uint64(len(m.Op)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *ExpressionList) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ExpressionList) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ExpressionList) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Items) > 0 {
		for iNdEx := len(m.Items) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Items[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintCommon(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintCommon(dAtA []byte, offset int, v uint64) int {
	offset -= sovCommon(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Amount) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Currency)
	if l > 0 {
		n += 1 + l + sovCommon(uint64(l))
	}
	if m.Value != 0 {
		n += 9
	}
	return n
}

func (m *Expression) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Op)
	if l > 0 {
		n += 1 + l + sovCommon(uint64(l))
	}
	l = len(m.Rhs)
	if l > 0 {
		n += 1 + l + sovCommon(uint64(l))
	}
	return n
}

func (m *ExpressionList) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Items) > 0 {
		for _, e := range m.Items {
			l = e.Size()
			n += 1 + l + sovCommon(uint64(l))
		}
	}
	return n
}

func sovCommon(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCommon(x uint64) (n int) {
	return sovCommon(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *Amount) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&Amount{`,
		`Currency:` + fmt.Sprintf("%v", this.Currency) + `,`,
		`Value:` + fmt.Sprintf("%v", this.Value) + `,`,
		`}`,
	}, "")
	return s
}
func (this *Expression) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&Expression{`,
		`Op:` + fmt.Sprintf("%v", this.Op) + `,`,
		`Rhs:` + fmt.Sprintf("%v", this.Rhs) + `,`,
		`}`,
	}, "")
	return s
}
func (this *ExpressionList) String() string {
	if this == nil {
		return "nil"
	}
	repeatedStringForItems := "[]*Expression{"
	for _, f := range this.Items {
		repeatedStringForItems += strings.Replace(f.String(), "Expression", "Expression", 1) + ","
	}
	repeatedStringForItems += "}"
	s := strings.Join([]string{`&ExpressionList{`,
		`Items:` + repeatedStringForItems + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringCommon(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *Amount) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCommon
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
			return fmt.Errorf("proto: Amount: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Amount: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Currency", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
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
				return ErrInvalidLengthCommon
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCommon
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Currency = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 1 {
				return fmt.Errorf("proto: wrong wireType = %d for field Value", wireType)
			}
			var v uint64
			if (iNdEx + 8) > l {
				return io.ErrUnexpectedEOF
			}
			v = uint64(encoding_binary.LittleEndian.Uint64(dAtA[iNdEx:]))
			iNdEx += 8
			m.Value = float64(math.Float64frombits(v))
		default:
			iNdEx = preIndex
			skippy, err := skipCommon(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *Expression) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCommon
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
			return fmt.Errorf("proto: Expression: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Expression: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Op", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
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
				return ErrInvalidLengthCommon
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCommon
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Op = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Rhs", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
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
				return ErrInvalidLengthCommon
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCommon
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Rhs = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCommon(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *ExpressionList) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCommon
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
			return fmt.Errorf("proto: ExpressionList: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ExpressionList: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Items", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCommon
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
				return ErrInvalidLengthCommon
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCommon
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Items = append(m.Items, &Expression{})
			if err := m.Items[len(m.Items)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCommon(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCommon
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipCommon(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCommon
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
					return 0, ErrIntOverflowCommon
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
					return 0, ErrIntOverflowCommon
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
				return 0, ErrInvalidLengthCommon
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCommon
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCommon
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCommon        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCommon          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCommon = fmt.Errorf("proto: unexpected end of group")
)
