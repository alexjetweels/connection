import { Button, Modal } from 'antd';
import React from 'react';

interface IProps {
  showDialog: boolean;
  cancelNavigation: any;
  confirmNavigation: any;
}

export const CommonModalConfirmDirty = ({
  showDialog,
  cancelNavigation,
  confirmNavigation,
}: IProps) => {
  const handleConfirm = () => {
    confirmNavigation();
  };
  return (
    <Modal
      open={showDialog}
      footer={null}
      closable={false}
      title={null}
      centered
      maskStyle={{ background: 'rgba(255, 255, 255, 0.9)' }}
    >
      <div className="p-[10px] flex justify-center flex-col items-center">
        <h1 className="text-[32px] text-[#666]">Warning!!!</h1>

        <div className="text-[#666] text-base">
          If you change, all of your working process will lost?
        </div>

        <div className="flex gap-[10px] mt-4">
          <Button
            onClick={handleConfirm}
            className="text-white bg-[#333] rounded-[5px] text-[12px] py-[2px] px-[18px] hover:text-white"
          >
            Yes
          </Button>
          <Button
            onClick={cancelNavigation}
            className="text-[#333] bg-white border border-solid border-[#333]  rounded-[5px] text-[12px] py-[2px] px-[18px]"
          >
            No
          </Button>
        </div>
      </div>
    </Modal>
  );
};
