import React from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import TicketsManager from "../../components/TicketsManager/";
import Ticket from "../../components/Ticket/";

import {
	Typography // Importar Typography do Material-UI
  } from "@material-ui/core";
import logo from "../../assets/logo.png";

import { i18n } from "../../translate/i18n";

const useStyles = makeStyles(theme => ({
	chatContainer: {
		flex: 1,
		// backgroundColor: "#eee",
		padding: theme.spacing(4),
		height: `calc(100% - 48px)`,
		overflowY: "hidden",
	},

	chatPapper: {
		// backgroundColor: "red",
		display: "flex",
		height: "100%",
	},

	contactsWrapper: {
		display: "flex",
		height: "100%",
		flexDirection: "column",
		overflowY: "hidden",
	},
	messagessWrapper: {
		display: "flex",
		height: "100%",
		flexDirection: "column",
	},
	welcomeMsg: {
		backgroundColor: theme.palette.boxticket,
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		height: "100%",
		textAlign: "center",
	},
}));

const Chat = () => {
	const classes = useStyles();
	const { ticketId } = useParams();

	return (
		<div className={classes.chatContainer}>
			<div className={classes.chatPapper}>
				<Grid container spacing={0}>
					<Grid item xs={4} className={classes.contactsWrapper}>
						<TicketsManager />
					</Grid>
					<Grid item xs={8} className={classes.messagessWrapper}>
						{ticketId ? (
							<>
								<Ticket />
							</>
						) : (
							<Paper square variant="outlined" className={classes.welcomeMsg}>

								<div>
									<center>
										<img style={{ margin: "0 auto", width: "70%" }} src={logo} alt="logologin" />
										<Paper className={classes.redBox} variant="outlined">
											<y variant="body1">
												<strong>Aviso Importante:</strong> Para todos os usuários do Multiconversa que notaram uma interrupção no funcionamento do OpenAI, gostaríamos de esclarecer que isso não se trata de um erro do sistema. O OpenAI oferece um crédito gratuito de $5 USD para novos cadastros, porém, este benefício também está sujeito a um limite de tempo, geralmente em torno de três meses. Quando o crédito disponibilizado se esgota, é necessário recarregar a conta para continuar utilizando o serviço. É importante estar ciente dessa política para garantir uma experiência contínua e sem interrupções no uso do OpenAI com o Multiconversa. Se você notou que o serviço parou de funcionar, verifique se seu crédito gratuito expirou e considere a recarga da conta, se necessário. Estamos à disposição para ajudar e esclarecer quaisquer dúvidas adicionais que possam surgir. Obrigado pela compreensão e continuaremos trabalhando para oferecer o melhor serviço possível aos nossos usuários.
											</Typography>
											{/* Links úteis */}
											<Typography variant="body1">
												<strong>Links Úteis:</strong>
												<br />
												Uso: <a href="https://platform.openai.com/usage">https://platform.openai.com/usage</a>
												<br />
												Fatura: <a href="https://platform.openai.com/account/billing/overview">https://platform.openai.com/account/billing/overview</a>
												<br />
												API: <a href="https://platform.openai.com/api-keys">https://platform.openai.com/api-keys</a>
											</Typography>
										</Paper></center>
								</div>

								{/*<span>{i18n.t("chat.noTicketMessage")}</span>*/}
							</Paper>
						)}
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Chat;
