class Build {
  constructor(client) {
    this.client = client;
  }

  /**
   * Build a Docker Image with Tag
   * @param {Object} buildConfig - Configuration for Tagging Docker Images
   * @param {String} buildConfig.file - File
   * @param {String} buildConfig.name - Name and optional tag <name:tag>
   * @param {Boolean} buildConfig.stream - Stream build output
   */
  async withTag(buildConfig) {
    const tarfs = require('tar-fs');
    try {
      await this.client
        .buildImage(tarfs.pack(buildConfig.file), {
          t: buildConfig.name,
        })
        .then(stream => {
          if (buildConfig.stream) stream.pipe(process.stdout);
        });
      return `Docker image finished build with ${buildConfig.name}.`;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = {
  Build
};
