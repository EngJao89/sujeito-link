import { useState, useEffect } from 'react';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import './links.css';
import { Link } from 'react-router-dom';

import { getLinksSave, deleteLink } from '../../services/storeLinks';
import LinkItem from '../../components/LinkItem';

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks(){
      const result = await getLinksSave('@encurtaLink');
      
      if(result.length === 0){
        alert('No links found');
        setEmptyList(true);
      }
      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link){
    setData(link);
    setShowModal(true);
  }

  async function handleDeleteLink(id){
    const result = await deleteLink(myLinks, id);

    if(result.length === 0){
      alert('No links found');
      setEmptyList(true);
    }

    setMyLinks(result);
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      { myLinks.map(link => (
        <div key={link.id} className="links-item">
          <button className="link" onClick={ () => handleOpenLink(link)}>
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </button>
          <button className="link-delete" onClick={ () => handleDeleteLink(link)}>
            <FiTrash size={24} color="#FF3434" />
          </button>
        </div>
      ))}

      { emptyList && (
        <div className="links-item">
          <h2 className="empty-text">Não há links cadastrados</h2>
        </div>
      )}

      { showModal && (
        <LinkItem 
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
    </div>
  );
}