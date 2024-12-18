export const getCharacterClassName = (classIdentifier: string): string => {
  switch (classIdentifier) {
    case "arcanist":
      return "Arcanista";
    case "chimerist":
      return "Quimerista";
    case "darkblade":
      return "Darkblade";
    case "elementalist":
      return "Elementalista";
    case "entropist":
      return "Entropista";
    case "fury":
      return "Furia";
    case "guardian":
      return "Guardián";
    case "loremaster":
      return "Erudito";
    case "orator":
      return "Orador";
    case "rogue":
      return "Pícaro";
    case "sharpshooter":
      return "Francotirador";
    case "spiritist":
      return "Espiritista";
    case "tinkerer":
      return "Reparador";
    case "wayfarer":
      return "Trotamundos";
    case "weaponmaster":
      return "Maestro de armas";
    default:
      return "Clase desconocida";
  }
};
