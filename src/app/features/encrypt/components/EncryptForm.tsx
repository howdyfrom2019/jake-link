'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useEncodeShortenUrl } from '@/requests/shorten';
import { useForm } from 'react-hook-form';

const EncryptForm = () => {
  const form = useForm();
  const { mutate: encyrptUrl } = useEncodeShortenUrl(
    (data) => console.log(data),
    (error) => console.error(error),
  );

  const onSubmit = (formData: any) => {
    // console.log(formData);
    encyrptUrl(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name={'originalUrl'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>줄이고 싶은 URL</FormLabel>
              <FormControl>
                <Input placeholder={'url'} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type={'submit'}>Create shorten URL</Button>
      </form>
    </Form>
  );
};

export default EncryptForm;
