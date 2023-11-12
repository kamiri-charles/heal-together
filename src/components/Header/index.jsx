import './styles.scss';

const Header = () => {
  return (
    <div className='header'>
        <div className="brand">
          <div>Heal</div>
          <div>Together</div>
        </div>

        <div className="profile">
          <i className="bx bx-user"></i>
        </div>
    </div>
  )
};

export default Header;