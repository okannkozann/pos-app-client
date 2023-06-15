import { Button, Card, Form, Input, Modal, Select } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout={"vertical"} onFinish={onFinish}>
        <Form.Item
          label="Müşteri Adı"
          name={"customerName"}
          rules={[{ required: true, message: "Müşteri Adı Boş Geçilemez" }]}
        >
          <Input placeholder="Müşteri Adı Giriniz" />
        </Form.Item>
        <Form.Item
          label="Tel No"
          name={"phoneNumber"}
          rules={[{ required: true, message: "Tel No Boş Geçilemez" }]}
        >
          <Input placeholder="Tel No Giriniz" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="Ödeme Yöntemi"
          name={"paymentMode"}
          rules={[{ required: true,  message: "Ödeme Yöntemi Boş Geçilemez"  }]}
        >
          <Select placeholder="Ödeme Yöndetimi Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>

        <Card>
          <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>550$</span>
          </div>
          <div className="flex justify-between my-2">
            <span>KDV Toplam %8</span>
            <span className="text-red-700">+50$</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Toplam</span>
            <span>550$</span>
          </div>
          <div className="flex justify-end">
            <Button
              className="mt-6 w-full"
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
              htmlType="submit"
            >
              Sipariş Oluştur
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBill;
