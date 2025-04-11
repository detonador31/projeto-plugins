# 📱 Projeto Plugins – Ionic 5 + Angular

Este repositório contém um projeto em **Ionic 5 com Angular**, demonstrando o uso de diversos **plugins nativos** e **funcionalidades essenciais** para aplicações mobile híbridas. O projeto serve como base para integração de recursos como câmera, geolocalização, banco de dados local, entre outros.

---

## ✨ Tecnologias principais

- **⚡️ Ionic Framework v5**
- **🅰️ Angular**
- **🔌 Capacitor + Cordova Plugins**
- **📦 Ionic Native**
- **🗄 SQLite + SQLite Porter**
- **💾 Ionic Storage**
- **💰 Máscaras de valores monetários (R$)**

## 🔌 Plugins e bibliotecas utilizadas

Abaixo estão os plugins mais relevantes usados no `app.module.ts`:

### 📷 Câmera e Arquivos
- [`@ionic-native/camera`](https://ionicframework.com/docs/native/camera)
- [`@ionic-native/file`](https://ionicframework.com/docs/native/file)
- [`@ionic-native/ionic-webview`](https://ionicframework.com/docs/native/ionic-webview)
- [`@ionic-native/file-path`](https://ionicframework.com/docs/native/file-path)

Permitem tirar fotos, manipular arquivos e visualizar mídias de forma segura no app.

---

### 📍 Geolocalização
- [`@ionic-native/geolocation`](https://ionicframework.com/docs/native/geolocation)

Usado para obter localização do usuário com GPS, útil para mapas, check-ins e rastreamento.

---

### 🗄️ Armazenamento de Dados
- [`@ionic/storage`](https://ionicframework.com/docs/building/storage)
- [`@ionic-native/sqlite`](https://ionicframework.com/docs/native/sqlite)
- [`@ionic-native/sqlite-porter`](https://ionicframework.com/docs/native/sqlite-porter)

Suporte a banco de dados local usando SQLite, além de armazenamento simples com chave-valor.

---

### 💸 Máscaras e Formatação de Dados
- [`br-mask`](https://www.npmjs.com/package/br-mask)

Biblioteca para aplicar máscaras em inputs, como valores monetários, CPF, CNPJ, etc.

- Pipes nativos do Angular para:
  - Data (`DatePipe`)
  - Moeda (`CurrencyPipe`)
  - Porcentagem (`PercentPipe`)

---

### 📊 Visualizações e UI extra
- [`chartjs-plugin-zoom`](https://www.chartjs.org/chartjs-plugin-zoom/latest/)
- Diretivas personalizadas:
  - `HideHeaderDirective`
  - `FadeHeaderDirective`

Adicionam efeitos de scroll e interação à interface, além de suporte a gráficos interativos.

---

## ⚙️ Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/detonador31/projeto-plugins.git
   cd projeto-plugins
   ```
   
2. **Instale as dependências:**
   ```bash
   npm install
   ```
   
3. **Rode o projeto em navegador:**
   ```bash
   ionic serve
   ```
   
4. **Para testar em dispositivos físicos ou emuladores:**
   ```bash
   ionic cap add android
   ionic cap open android
   ```

### 📌 Pré-requisitos
- *Node.js 14+*

- *Ionic CLI (npm install -g @ionic/cli)*

- *Android Studio ou Xcode (para builds nativos)*

- *Dispositivo ou emulador para testar plugins nativos*

### 🧑‍💻 Contribuições
Sinta-se à vontade para abrir uma issue ou enviar um pull request com sugestões de novos plugins, correções ou melhorias no código.

### 📜 Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.


