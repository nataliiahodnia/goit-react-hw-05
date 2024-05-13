import css from "./MovieCastCard.module.css";

export default function MovieCastCard({
  data: { profile_path, name, character },
}) {
  const nameParts = character.split(" (");
  const characterName = nameParts[0].includes("voice") ? "" : nameParts[0];
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div>
      <img
        className={css.img}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : defaultImg
        }
        alt={name}
      />
      <p className={css.text}>{name}</p>
      <p className={css.text}>Character: {characterName}</p>
    </div>
  );
}
