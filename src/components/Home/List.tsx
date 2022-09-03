import { useI18n } from "react-simple-i18n";
import { useChallenge } from "../../contexts/challenge";

export function List() {
  const { t } = useI18n();
  const { guessedTags } = useChallenge();

  return (
    <div data-testid="list">
      <div className="flex p-4 mt-4 rounded-t-2xl justify-between bg-zinc-100 border-2 border-zinc-900 items-center">
        <p className="text-2xl font-montserrat">{t("home.form.title-list")}</p>
      </div>

      <div className="flex flex-col p-4 rounded-b-2xl justify-between bg-zinc-100 border-t-0 border-b-2 border-x-2 border-zinc-900">
        {guessedTags.map((tag) => (
          <li data-testid="tag-item" key={tag} className="list-decimal text-lg">
            {tag}
          </li>
        ))}
      </div>
    </div>
  );
}
