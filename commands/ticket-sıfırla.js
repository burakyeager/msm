const Discord = require("discord.js")
const wixua = require("croxydb");
const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "ticket-sıfırla",
  description: "Ticket Sistemini Kurar!",
  type: 1,
  options: [],
  run: async (client, interaction) => {

    const ayarla = wixua.get(`ticketSistem_${interaction.guild.id}`)

    const sistem_ayarlı_değil = new EmbedBuilder()
    .setAuthor({name: `${interaction.user.tag}`, iconURL: interaction.user.avatarURL()})
            .setDescription("`❌` | **Ticket sistemi ayarlı değil.**")
            .setFooter({text: "Sistemi açmak için /ticket-kur yazmanız yeterli."})

        if (!ayarla) return interaction.reply({ embeds: [sistem_ayarlı_değil], ephemeral: true })

    const { user, customId, guild } = interaction;

    const embed = new EmbedBuilder()
    .setAuthor({name: `Başarılı ${interaction.user.tag}`, iconURL: interaction.user.avatarURL()})
    .setDescription("`✅` | **Ticket sistemi başarıyla sıfırlandı**")
    .setFooter({text: "Sistemi tekrar kurmak için /ticket-kur yazmanız yeterli."})

    interaction.reply({embeds: [embed]})

    wixua.delete(`ticketKatagor_${guild.id}`)
    wixua.delete(`ticketSistem_${guild.id}`)
  }
}
