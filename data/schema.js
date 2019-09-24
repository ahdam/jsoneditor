var schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "pacient": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        }
      },
      "required": [
        "name"
      ]
    },
    "sessions": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "failConditions": {
              "type": "string"
            },
            "initialWorldStats": {
              "type": "object",
              "properties": {
                "stat1": {
                  "type": "integer"
                },
                "stat2": {
                  "type": "integer"
                }
              },
              "required": [
                "stat1",
                "stat2"
              ]
            },
            "pacientStats": {
              "type": "object",
              "properties": {
                "stat1": {
                  "type": "integer"
                },
                "stat2": {
                  "type": "integer"
                }
              },
              "required": [
                "stat1",
                "stat2"
              ]
            },
            "vars": {
              "type": "object",
              "properties": {
                "sceneVar1": {
                  "type": "boolean"
                },
                "sceneVar2": {
                  "type": "boolean"
                }
              },
              "required": [
                "sceneVar1",
                "sceneVar2"
              ]
            },
            "scenes": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "blocks": {
                      "type": "array",
                      "items": [
                        {
                          "type": "object",
                          "properties": {
                            "text": {
                              "type": "string"
                            },
                            "choices": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "object",
                                  "properties": {
                                    "text": {
                                      "type": "string"
                                    },
                                    "resultText": {
                                      "type": "string"
                                    },
                                    "effects": {
                                      "type": "object",
                                      "properties": {
                                        "goTo": {
                                          "type": "integer"
                                        },
                                        "vars": {
                                          "type": "object",
                                          "properties": {
                                            "sceneVar1": {
                                              "type": "boolean"
                                            }
                                          },
                                          "required": [
                                            "sceneVar1"
                                          ]
                                        },
                                        "worldStats": {
                                          "type": "object",
                                          "properties": {
                                            "stat1": {
                                              "type": "integer"
                                            }
                                          },
                                          "required": [
                                            "stat1"
                                          ]
                                        },
                                        "pacientStats": {
                                          "type": "object",
                                          "properties": {
                                            "stat2": {
                                              "type": "integer"
                                            }
                                          },
                                          "required": [
                                            "stat2"
                                          ]
                                        }
                                      },
                                      "required": [
                                        "goTo",
                                        "vars",
                                        "worldStats",
                                        "pacientStats"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "text",
                                    "resultText",
                                    "effects"
                                  ]
                                }
                              ]
                            }
                          },
                          "required": [
                            "text",
                            "choices"
                          ]
                        }
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "blocks"
                  ]
                }
              ]
            }
          },
          "required": [
            "name",
            "failConditions",
            "initialWorldStats",
            "pacientStats",
            "vars",
            "scenes"
          ]
        }
      ]
    }
  },
  "required": [
    "pacient",
    "sessions"
  ]
}