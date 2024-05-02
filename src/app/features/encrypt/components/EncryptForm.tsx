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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const schema = z.object({
  originalUrl: z.string().url({ message: '올바르지 않은 URL 형식입니다.' }),
});

type SchemaType = z.infer<typeof schema>;

const EncryptForm = () => {
  const form = useForm<SchemaType>({
    defaultValues: {
      originalUrl: '',
    },
    resolver: zodResolver(schema),
  });
  const { mutateAsync: encyrptUrl } = useEncodeShortenUrl(
    (data) => {
      navigator.clipboard
        .writeText(`${window.location}/${data.hash}`)
        .then(() => {
          toast('링크가 복사되었습니다!');
        });
    },
    (error) => console.error(error),
  );

  const onSubmit = async (formData: SchemaType) => {
    await encyrptUrl(formData);
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
        <Button disabled={form.formState.isSubmitting} type={'submit'}>
          Create shorten URL
        </Button>
      </form>
    </Form>
  );
};

export default EncryptForm;
