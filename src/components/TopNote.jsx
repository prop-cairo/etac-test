import axios from "axios";
import { useEffect, useState } from "react";
import { WP_API_BASE_URL } from "@/settings/wordPress";

const TopNote = () => {
  const [note, setNote] = useState([]);

  const fetchTopNote = () => {
    axios.get(`${WP_API_BASE_URL}/wp-json/wp/custom/note`).then((res) => {
      setNote(res.data);
    });
  };

  useEffect(() => {
    fetchTopNote();
  }, []);

  return (
    <section className="top-note">
      <div className="top-note-container">
        <div className="top-note-title-container">
          <img src="/images/note.svg" alt="note" />
        </div>
        <ul className="top-note-list">
          {/* <li><span>2024.03.08</span><a href="https://nagaokaohte-hs.note.jp/n/n9546cd7d48d1?magazine_key=m0fec1606f066">記事タイトル</a></li>
              <li><span>2024.03.08</span><a href="https://nagaokaohte-hs.note.jp/n/n9546cd7d48d1?magazine_key=m0fec1606f066">記事タイトル記事タイトル</a></li>
              <li><span>2024.03.08</span><a href="https://nagaokaohte-hs.note.jp/n/n9546cd7d48d1?magazine_key=m0fec1606f066">記事タイトル記事タイトル記事タイトル</a></li>
              <li><span>2024.03.08</span><a href="https://nagaokaohte-hs.note.jp/n/n9546cd7d48d1?magazine_key=m0fec1606f066">記事タイトル記事タイトル記事タイトル記事タイトル</a></li>
              <li><span>2024.03.08</span><a href="https://nagaokaohte-hs.note.jp/n/n9546cd7d48d1?magazine_key=m0fec1606f066">記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル</a></li> */}
          {note.map((note) => (
            <li key={note.id}>
              <span>{note.date}</span>
              <a href={note.link}>{note.title}</a>
            </li>
          ))}
        </ul>
        <div className="top-note-link">
          <a href="https://note.com/note_education/m/m0fec1606f066">
            <div className="top-note-link-container">
              <img src="/images/noteicon.svg" alt="note" />
              <span>noteで読む</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopNote;
