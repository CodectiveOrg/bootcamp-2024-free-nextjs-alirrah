import CardComponent from "@/components/card/card.component";

import { AddressType } from "@/types/address.type";

import MingcutePhoneLine from "@/icon/MingcutePhoneLine";

import styles from "./address.module.css";

type Props = {
  doctorAddresses?: AddressType[];
};

export default function AddressComponent({ doctorAddresses }: Props) {
  if (!doctorAddresses || doctorAddresses.length === 0) {
    return null;
  }

  return (
    <div className={styles.address}>
      <b>آدرس و تلفن تماس</b>
      <CardComponent>
        <ul>
          {doctorAddresses.map((address) => (
            <li key={address.key}>
              <b>{address.title}</b>
              <p>{address.location}</p>
              {address.phones?.map((phone) => (
                <a href={`tel:${phone}`} key={phone}>
                  <MingcutePhoneLine />
                  <p>{phone}</p>
                </a>
              ))}
            </li>
          ))}
        </ul>
      </CardComponent>
    </div>
  );
}
