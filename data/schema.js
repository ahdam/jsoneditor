var schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "patient": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "bio": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "bio"
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
              "type": "object",
              "properties": {
                "patientStats": {
                  "type": "object",
                  "properties": {
                    "stat1": {
                      "type": "string"
                    },
                    "stat2": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "stat1",
                    "stat2"
                  ]
                },
                "initialWorldStats": {
                  "type": "object",
                  "properties": {
                    "stat1": {
                      "type": "string"
                    },
                    "stat2": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "stat1",
                    "stat2"
                  ]
                }
              },
              "required": [
                "patientStats",
                "initialWorldStats"
              ]
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
            "patientStats": {
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
                              "type": "array",
                              "items": [
                                {
                                  "type": "string"
                                },
                                {
                                  "type": "string"
                                }
                              ]
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "text",
                                    "resultText",
                                    "effects"
                                  ]
                                },
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "text",
                                    "resultText",
                                    "effects"
                                  ]
                                },
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
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
                        },
                        {
                          "type": "object",
                          "properties": {
                            "text": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "string"
                                },
                                {
                                  "type": "string"
                                }
                              ]
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "text",
                                    "resultText",
                                    "effects"
                                  ]
                                },
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
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
                        },
                        {
                          "type": "object",
                          "properties": {
                            "text": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "string"
                                },
                                {
                                  "type": "string"
                                }
                              ]
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
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
                        },
                        {
                          "type": "object",
                          "properties": {
                            "text": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "string"
                                },
                                {
                                  "type": "string"
                                }
                              ]
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "text",
                                    "resultText",
                                    "effects"
                                  ]
                                },
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
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
                },
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
                              "type": "array",
                              "items": [
                                {
                                  "type": "string"
                                },
                                {
                                  "type": "string"
                                }
                              ]
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "text",
                                    "resultText",
                                    "effects"
                                  ]
                                },
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
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
                        },
                        {
                          "type": "object",
                          "properties": {
                            "text": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "string"
                                },
                                {
                                  "type": "string"
                                }
                              ]
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "text",
                                    "resultText",
                                    "effects"
                                  ]
                                },
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
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
                },
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
                              "type": "array",
                              "items": [
                                {
                                  "type": "string"
                                },
                                {
                                  "type": "string"
                                }
                              ]
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
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
                        },
                        {
                          "type": "object",
                          "properties": {
                            "text": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "string"
                                },
                                {
                                  "type": "string"
                                }
                              ]
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "text",
                                    "resultText",
                                    "effects"
                                  ]
                                },
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
                                          "type": "string"
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
                                        "patientStats": {
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
                                        "patientStats"
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
            "patientStats",
            "vars",
            "scenes"
          ]
        }
      ]
    }
  },
  "required": [
    "patient",
    "sessions"
  ]
}