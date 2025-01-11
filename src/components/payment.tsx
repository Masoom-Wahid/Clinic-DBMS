import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Button,
  Typography,
} from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface PaymentModalProps {
  open: boolean;
  handleOpen: () => void;
  treatment: {
    amount: number;
    real_amount: number;
    type_of_treatment: string;
  } | null;
  onSubmit: (amount: number) => void;
}

export default function PaymentModal({
  open,
  handleOpen,
  treatment,
  onSubmit,
}: PaymentModalProps) {
  const [paymentAmount, setPaymentAmount] = React.useState<number>(0);
  const remainingAmount = treatment?.real_amount ?? 0;

  const handleSubmit = () => {
    if (paymentAmount > remainingAmount || paymentAmount <= 0) {
      return;
    }
    onSubmit(paymentAmount);
    handleOpen();
    setPaymentAmount(0);
  };

  return (
    <Dialog
      size="sm"
      open={open}
      handler={handleOpen}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="p-4">
        <DialogHeader
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Typography
            variant="h5"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Process Payment
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={handleOpen}
            className="!absolute right-2"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <XMarkIcon className="h-5 w-5" />
          </IconButton>
        </DialogHeader>

        <DialogBody
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <div className="space-y-4">
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Treatment: {treatment?.type_of_treatment}
            </Typography>
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Remaining Amount: ${remainingAmount}
            </Typography>
            <div>
              <Typography
                variant="small"
                className="mb-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Payment Amount
              </Typography>
              <input
                type="number"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(Number(e.target.value))}
                className="w-full border rounded-lg p-2"
                max={remainingAmount}
                min={0}
              />
            </div>
          </div>
        </DialogBody>

        <DialogFooter
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-5"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleSubmit}
            disabled={paymentAmount > remainingAmount || paymentAmount <= 0}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Process Payment
          </Button>
        </DialogFooter>
      </div>
    </Dialog>
  );
}
