const FooterLink = ({ title, links }) => {
  return (
    <ul>
      <li>{title}</li>
      {links.map(({ link, isNew },index) => {
        return (
          <li key={index}>
            <a href="#">{link}</a> {isNew && <span>New</span>}
          </li>
        );
      })}
    </ul>
  );
};

export default FooterLink