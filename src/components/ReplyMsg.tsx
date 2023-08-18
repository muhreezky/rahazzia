import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Textarea } from "@material-tailwind/react";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

type MyProps = {
  message: Message;
  handler: () => void;
  open: boolean;
};

const validationSchema = Yup.object().shape({
  text: Yup.string().required("Balasan harus diisi")
});

export default function ReplyMsg (props: MyProps) {
  const { handler, message, open } = props;
  const formik = useFormik({
    initialValues: {
      text: ""
    },
    validationSchema,
    onSubmit(val) {
      
    }
  });
  return (
    <>
      <Button onClick={handler} color="green">
        Balas
      </Button>
      <Dialog open={open} handler={handler}>
        <form onSubmit={formik.handleSubmit}>
          <DialogHeader className="bg-blue-600">
            Balas Pesan ini
          </DialogHeader>
          <DialogBody>
            <Textarea required onChange={formik.handleChange} name="text" id="text" label="Balasan anda..." />
          </DialogBody>
          <DialogFooter className="px-3 py-1">
            <Button color="blue" type="submit" fullWidth>
              Submit
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  )
}