import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "../projects.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <div className="container-centered">
      <p className="text-justified">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        inventore eligendi illo illum ex rerum expedita provident in harum,
        incidunt omnis voluptates quisquam odio dolor at odit possimus rem saepe
        aliquam quam maiores! Veritatis alias ea quae ducimus saepe, quasi
        facere facilis, quibusdam aliquid officiis corrupti magnam iusto
        quisquam sint quam quidem soluta qui fuga hic. Maxime sint iure maiores.
        Quaerat velit rerum, suscipit deleniti quisquam fugit consectetur soluta
        commodi expedita esse ipsam sed obcaecati veritatis quidem molestiae
        pariatur, possimus officia eligendi omnis hic qui. Omnis quam, ducimus
        fugiat distinctio beatae accusantium temporibus, quidem, earum ut alias
        magni rem adipisci minima non molestiae sequi? Vitae a nobis, sed ipsa
        quis est officia exercitationem eligendi sapiente tenetur optio ea
        repellendus repellat laborum dolorem ut voluptatibus dolorum aut eos rem
        deleniti quod voluptate minima! Modi, laboriosam iusto laudantium
        reiciendis fugit mollitia unde ex porro saepe rem quo, tenetur eius
        distinctio in amet! Dolores libero quibusdam, fugiat aliquid voluptate
        mollitia ullam neque asperiores eaque sit ipsa aspernatur magni vero
        tempore repellat odit adipisci delectus. Sed necessitatibus quisquam a
        ipsa corrupti odit. Accusantium deleniti, adipisci voluptatum ut
        dignissimos non mollitia eligendi officia magnam ducimus id, modi aut
        delectus sapiente iusto eaque quaerat corporis itaque?
      </p>
    </div>
  );
});
