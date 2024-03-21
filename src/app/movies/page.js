import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/media-card/MediaCard.module.scss"

const MediaCard = ({ params }) => {
  return (
    <div className={styles.card}>
      <Link href={`/movies/${params.id}`}>
        <div className={styles.image}>
          <Image
            src="/images/doubletrouble.png"
            alt="media title"
            fill
          />
        </div>
        <div className={styles.content}>
          <h2>Creed III</h2>
          <p>Le 01/03/2023</p>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;