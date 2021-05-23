const defineCampaignModel = (sequelize, DataTypes) => {
  const Campaign = sequelize.define('Campaign', {
    name: DataTypes.STRING,
  });

  return Campaign;
}

module.exports = defineCampaignModel;