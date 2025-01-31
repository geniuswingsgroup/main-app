const ContactCard = ({ title, email, phone, icon }) => (
    <div className="mb-12 w-full  shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-teal-400-100 p-4 text-primary">{icon}</div>
        </div>
        <div className="ml-6 grow">
          <p className="mb-2 font-bold text-text_color">{title}</p>
          <p className="text-sub_text">{email}</p>
          {phone && <p className="text-sub_text">{phone}</p>}
        </div>
      </div>
    </div>
  );
  export default ContactCard