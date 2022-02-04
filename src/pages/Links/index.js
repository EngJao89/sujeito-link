import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import './links.css';
import { Link } from 'react-router-dom';

export default function Links() {
  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#fff" />
          https://soundcloud.com/rastanizmusic
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#FF3434" />
        </button>
      </div>

      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#fff" />
          https://www.youtube.com/
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#FF3434" />
        </button>
      </div>
    </div>
  );
}