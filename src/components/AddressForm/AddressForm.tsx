import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import * as yup from 'yup';
import { HorizontalContainer } from '../Containers';
import { TextField } from '../Form';

export const getAddressSchema = () =>
  yup.object().shape({
    firstName: yup.string().required().min(2),
    lastName: yup.string().required().min(2),
    company: yup.string(),
    address: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
  });

export interface AddressFormProps {
  title?: string;

  /** parent name e.g. "shippingAddress" */
  parentName: string;
}

export const AddressForm = ({ title, parentName }: AddressFormProps) => {
  const { register } = useFormContext();

  return (
    <Fragment>
      {title !== undefined ? <h3 className="mt-3 mb-3">{title}</h3> : null}
      <div className="mb-2">
        <TextField
          id="firstName"
          {...register(`${parentName}.firstName`)}
          label="First name"
        />
      </div>
      <div className="mb-2">
        <TextField
          id="lastName"
          {...register(`${parentName}.lastName`)}
          label="Last name"
        />
      </div>

      <div className="mb-2">
        <TextField
          id="company"
          {...register(`${parentName}.company`)}
          label="Company (optional)"
        />
      </div>

      <div className="mb-2">
        <TextField
          id="address"
          {...register(`${parentName}.address`)}
          label="Address"
        />
      </div>

      <HorizontalContainer>
        <div className="mb-2 flex-2">
          <TextField
            id="city"
            {...register(`${parentName}.city`)}
            label="City"
          />
        </div>
        <div className="mb-2 ml-1 flex-1">
          <TextField
            id="state"
            {...register(`${parentName}.state`)}
            label="State"
          />
        </div>
        <div className="ml-1 flex-1">
          <TextField
            id="zip"
            {...register(`${parentName}.zip`)}
            label="Zip"
          />
        </div>
      </HorizontalContainer>
    </Fragment>
  );
};
